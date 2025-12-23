import { useCallback, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DndProvider, useDrag, useDrop, type DragSourceMonitor, type DropTargetMonitor } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemTypes = {
  ICON: "icon",
} as const;

type DragItem = {
  type: typeof ItemTypes.ICON;
  icon: string;
};

type DroppedIcon = {
  icon: string;
  x: number;
  y: number;
};

// ----- data -----
const generalIcons = [
  "⬛", "⚪", "🔺", "⬜", "🟦", "🟩", "🟥", "🟨", "⬟", "⬠", "⬢",
  "➡️", "⬅️", "⬆️", "⬇️", "🔃", "🔁", "🔂",
  "⭐", "❤️", "😊", "💡", "🔋", "⚙️",
  "📁", "📂", "📄", "📝", "📊", "📈", "📉",
  "📦", "📱", "💻", "🖥️", "🔌", "📡", "🌐",
  "👤", "👥", "🔍", "🔗", "🏢", "🏠",
] as const;

const miscIcons = [
  "🚀", "🎯", "🎲", "📌", "📍", "🔒", "🔓", "🔑", "🎨", "🧩", "🧰",
  "🛠️", "🧪", "📎", "📐", "🧭", "⏱️", "🛡️", "🗂️", "🪄",
] as const;

const advancedIcons = [
  "🧠", "🖇️", "📚", "🔬", "📡", "📶", "💽", "💾", "🖲️",
  "📠", "🧮", "📤", "📥", "🗃️", "🔎", "🛰️", "📻", "📺",
] as const;

const basicIcons = [
  "◼️", "◻️", "🔵", "🟠", "🟣", "⚫", "🔸", "🔹", "➕", "➖",
  "✖️", "➗", "✏️", "🖊️", "📌", "📍", "🧷", "📐", "📏", "🔍",
] as const;

type ToolboxData = Record<string, Record<string, readonly string[]>>;

const toolboxData: ToolboxData = {
  Shapes: { General: generalIcons },
  Misc: { Miscellaneous: miscIcons },
  Advanced: { AdvancedSymbols: advancedIcons },
  Basic: { BasicSymbols: basicIcons },
};

// ----- components -----
type ToolCategoryProps = {
  title: string;
  items: readonly string[];
};

const ToolCategory = ({ title, items }: ToolCategoryProps) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <div className="mb-2">
      <div
        className="fw-bold bg-secondary text-white px-2 py-1 cursor-pointer"
        onClick={() => setExpanded((v) => !v)}
        role="button"
        tabIndex={0}
      >
        {title}
      </div>

      {expanded && (
        <div className="d-flex flex-wrap px-2 pt-2">
          {items.map((item, idx) => (
            <DraggableIcon key={`${title}-${idx}`} icon={item} />
          ))}
        </div>
      )}
    </div>
  );
};

type DraggableIconProps = {
  icon: string;
};

const DraggableIcon = ({ icon }: DraggableIconProps) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.ICON,
      item: { type: ItemTypes.ICON, icon } satisfies DragItem,
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [icon]
  );

  // ✅ callback ref avoids TS2322 ConnectDragSource/ref mismatch
  const setDragRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;
      drag(node);
    },
    [drag]
  );

  return (
    <div
      ref={setDragRef}
      className="m-1 d-flex align-items-center justify-content-center rounded"
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#f5f5f5",
        fontSize: "20px",
        border: "1px solid #ccc",
        cursor: "grab",
        opacity: isDragging ? 0.5 : 1,
        userSelect: "none",
      }}
      title="Drag"
    >
      {icon}
    </div>
  );
};

type DropCanvasProps = {
  zoom: number;
};

const DropCanvas = ({ zoom }: DropCanvasProps) => {
  const [droppedIcons, setDroppedIcons] = useState<DroppedIcon[]>([]);

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.ICON,
      drop: (item: DragItem, monitor: DropTargetMonitor) => {
        const offset = monitor.getClientOffset();
        if (!offset) return; // ✅ offset can be null

        const dropTarget = document.getElementById("canvas");
        if (!dropTarget) return; // ✅ element can be null

        const rect = dropTarget.getBoundingClientRect();

        setDroppedIcons((icons) => [
          ...icons,
          {
            icon: item.icon,
            x: (offset.x - rect.left) / zoom,
            y: (offset.y - rect.top) / zoom,
          },
        ]);
      },
    }),
    [zoom]
  );

  // ✅ callback ref avoids TS2322 mismatch
  const setDropRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;
      drop(node);
    },
    [drop]
  );

  return (
    <div
      id="canvas"
      ref={setDropRef}
      className="flex-grow-1 bg-white position-relative"
      style={{
        transform: `scale(${zoom})`,
        transformOrigin: "top left",
        overflow: "hidden",
      }}
    >
      {droppedIcons.map((it, index) => (
        <div
          key={`${it.icon}-${index}`}
          style={{
            position: "absolute",
            left: it.x,
            top: it.y,
            fontSize: "24px",
            userSelect: "none",
          }}
        >
          {it.icon}
        </div>
      ))}
    </div>
  );
};

const DrawToolboxPage = () => {
  const [zoom, setZoom] = useState<number>(1);

  const categories = useMemo(() => Object.entries(toolboxData), []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="d-flex flex-column vh-100">
        {/* Top Toolbar */}
        <div className="d-flex justify-content-between align-items-center bg-light border-bottom px-3 py-2">
          <div>
            <button className="btn btn-outline-secondary btn-sm me-2">📁 File</button>
            <button className="btn btn-outline-secondary btn-sm me-2">✏️ Edit</button>
            <button className="btn btn-outline-secondary btn-sm me-2">👁️ View</button>
            <button className="btn btn-outline-secondary btn-sm">⚙️ Extras</button>
          </div>

          <div>
            <button
              onClick={() => setZoom((z) => Math.min(Number((z + 0.1).toFixed(2)), 2))}
              className="btn btn-outline-dark btn-sm me-2"
            >
              ➕ Zoom In
            </button>
            <button
              onClick={() => setZoom((z) => Math.max(Number((z - 0.1).toFixed(2)), 0.5))}
              className="btn btn-outline-dark btn-sm"
            >
              ➖ Zoom Out
            </button>
          </div>
        </div>

        <div className="d-flex flex-grow-1">
          {/* Toolbox Sidebar */}
          <div className="bg-light border-end p-2" style={{ width: "300px", overflowY: "scroll" }}>
            <h5 className="text-center">🧰 Toolbox</h5>

            {categories.map(([category, sections]) => (
              <div key={category} className="mb-3">
                <div className="text-primary fw-bold ps-1">{category}</div>

                {Object.entries(sections).map(([sub, items]) => (
                  <ToolCategory key={`${category}-${sub}`} title={sub} items={items} />
                ))}
              </div>
            ))}
          </div>

          {/* Drawing Canvas */}
          <DropCanvas zoom={zoom} />
        </div>
      </div>
    </DndProvider>
  );
};

export default DrawToolboxPage;

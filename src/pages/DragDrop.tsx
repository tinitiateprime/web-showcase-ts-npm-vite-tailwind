import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemTypes = {
  ICON: "icon",
};

const generalIcons = [
  "⬛", "⚪", "🔺", "⬜", "🟦", "🟩", "🟥", "🟨", "⬟", "⬠", "⬢",
  "➡️", "⬅️", "⬆️", "⬇️", "🔃", "🔁", "🔂",
  "⭐", "❤️", "😊", "💡", "🔋", "⚙️",
  "📁", "📂", "📄", "📝", "📊", "📈", "📉",
  "📦", "📱", "💻", "🖥️", "🔌", "📡", "🌐",
  "👤", "👥", "🔍", "🔗", "🏢", "🏠"
];

const miscIcons = [
  "🚀", "🎯", "🎲", "📌", "📍", "🔒", "🔓", "🔑", "🎨", "🧩", "🧰",
  "🛠️", "🧪", "📎", "📐", "🧭", "⏱️", "🛡️", "🗂️", "🪄"
];

const advancedIcons = [
  "🧠", "🖇️", "📚", "🔬", "📡", "📶", "💽", "💾", "🖲️",
  "📠", "🧮", "📤", "📥", "🗃️", "🔎", "🛰️", "📻", "📺"
];

const basicIcons = [
  "◼️", "◻️", "🔵", "🟠", "🟣", "⚫", "🔸", "🔹", "➕", "➖",
  "✖️", "➗", "✏️", "🖊️", "📌", "📍", "🧷", "📐", "📏", "🔍"
];

const toolboxData = {
  Shapes: {
    General: generalIcons
  },
  Misc: {
    Miscellaneous: miscIcons
  },
  Advanced: {
    AdvancedSymbols: advancedIcons
  },
  Basic: {
    BasicSymbols: basicIcons
  }
};

const ToolCategory = ({ title, items }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="mb-2">
      <div
        className="fw-bold bg-secondary text-white px-2 py-1 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {title}
      </div>
      {expanded && (
        <div className="d-flex flex-wrap px-2 pt-2">
          {items.map((item, idx) => (
            <DraggableIcon key={idx} icon={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const DraggableIcon = ({ icon }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ICON,
    item: { icon },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div
      ref={drag}
      className="m-1 d-flex align-items-center justify-content-center rounded"
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#f5f5f5",
        fontSize: "20px",
        border: "1px solid #ccc",
        cursor: "grab",
        opacity: isDragging ? 0.5 : 1
      }}
    >
      {icon}
    </div>
  );
};

const DropCanvas = ({ zoom }) => {
  const [droppedIcons, setDroppedIcons] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.ICON,
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const dropTarget = document.getElementById("canvas");
      const rect = dropTarget.getBoundingClientRect();
      setDroppedIcons((icons) => [
        ...icons,
        {
          icon: item.icon,
          x: (offset.x - rect.left) / zoom,
          y: (offset.y - rect.top) / zoom
        }
      ]);
    }
  }));

  return (
    <div
      id="canvas"
      ref={drop}
      className="flex-grow-1 bg-white position-relative"
      style={{
        transform: `scale(${zoom})`,
        transformOrigin: "top left",
        overflow: "hidden"
      }}
    >
      {droppedIcons.map((item, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            fontSize: "24px"
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

const DrawToolboxPage = () => {
  const [zoom, setZoom] = useState(1);

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
            <button onClick={() => setZoom((z) => Math.min(z + 0.1, 2))} className="btn btn-outline-dark btn-sm me-2">
              ➕ Zoom In
            </button>
            <button onClick={() => setZoom((z) => Math.max(z - 0.1, 0.5))} className="btn btn-outline-dark btn-sm">
              ➖ Zoom Out
            </button>
          </div>
        </div>

        <div className="d-flex flex-grow-1">
          {/* Toolbox Sidebar */}
          <div
            className="bg-light border-end p-2"
            style={{ width: "300px", overflowY: "scroll" }}
          >
            <h5 className="text-center">🧰 Toolbox</h5>
            {Object.entries(toolboxData).map(([category, sections]) => (
              <div key={category} className="mb-3">
                <div className="text-primary fw-bold ps-1">{category}</div>
                {Object.entries(sections).map(([sub, items]) => (
                  <ToolCategory key={sub} title={sub} items={items} />
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

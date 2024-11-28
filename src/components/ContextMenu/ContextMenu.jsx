import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import "./contextmenu.scss";

const ContextMenu = ({ data, menuPosition, onClickOutside }) => {
  return (
    <div
      className="context-menu"
      style={{
        position: "absolute",
        top: menuPosition.y,
        left: menuPosition.x,
      }}
      onClick={onClickOutside} // Close menu when clicking outside
    >
      {data.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          onClick={() => console.log(`Selected: ${item.label}`)}
        >
          <Icon icon={item.icon} className="menu-icon" />
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;

ContextMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  menuPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  onClickOutside: PropTypes.func.isRequired,
};


// export default function ContextMenu({ data }) {
//   const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
//   const [visible, setVisible] = useState(false);
//   const menuRef = useRef(null);

//   const handleContextMenu = (e) => {
//     e.preventDefault();
//     setMenuPosition({ x: e.pageX, y: e.pageY });
//     setVisible(true);
//   };

//   const handleClickOutside = (e) => {
//     if (menuRef.current && !menuRef.current.contains(e.target)) {
//       setVisible(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <>
//       <div onContextMenu={handleContextMenu}> {/* Area to right-click */}
//         {data.map((item) => (
//           <div key={item.id} className="menu-item">
//             <span>{item.label}</span>
//           </div>
//         ))}
//       </div>

//       {visible && (
//         <div
//           className="context-menu"
//           style={{ top: menuPosition.y, left: menuPosition.x }}
//           ref={menuRef}
//         >
//           {data.map((item) => (
//             <div key={item.id} className="menu-item" onClick={() => console.log(`Selected: ${item.label}`)}>
//               <Icon icon={item.icon} className="menu-icon" /> {/* Display icon */}
//               {item.label}
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// ContextMenu.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       label: PropTypes.string.isRequired,
//       icon: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

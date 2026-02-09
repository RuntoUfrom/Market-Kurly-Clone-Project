const MenuNavBtn = ({ emoji = "", label, mainTab }) => {
  return (
    <div>
      <div className="flex items-center justify-between p-2 bg-white">
        <div className="flex items-center gap-1">
          {emoji && <span>{emoji}</span>}
          <span
            className={mainTab ? "text-sm font-bold" : "text-xs text-gray-600"}
          >
            {label}
          </span>
        </div>
        {mainTab && <span className="text-gray-400 text-sm">&gt;</span>}
      </div>
    </div>
  );
};
export default MenuNavBtn;

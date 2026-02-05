import MenuCard from "@/components/common/MenuCard";
const MenuGrid = ({ isBar = true, rowNum = 1, MenuList = [] }) => {
    MenuList.map((item) => <MenuCard LogoImage = {} label = {item} onClick = {() => {console.log("메뉴 카드 클릭 ")}}/>)
};
export default MenuGrid;

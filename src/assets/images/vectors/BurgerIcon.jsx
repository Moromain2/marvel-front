const BurgerIcon = ({ fill_color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px"><defs></defs><path fill={fill_color ? fill_color : "#FFFFFF"} d="m74,70H26c-1.65,0-3,1.35-3,3s1.35,3,3,3h48c1.65,0,3-1.35,3-3s-1.35-3-3-3Z" /><path fill={fill_color ? fill_color : "#FFFFFF"} d="m74,47H26c-1.65,0-3,1.35-3,3s1.35,3,3,3h48c1.65,0,3-1.35,3-3s-1.35-3-3-3Z" /><path fill={fill_color ? fill_color : "#FFFFFF"} d="m74,24H26c-1.65,0-3,1.35-3,3s1.35,3,3,3h48c1.65,0,3-1.35,3-3s-1.35-3-3-3Z" /></svg>
    )
}

export default BurgerIcon;



export const preCalculateNode = (node) => {
    const iconSize=24;
    const icon='node';
    const padding = { x: 20, y: 10 };
    const textWidth = node.full_name.length*7;
    const textGap = 6;
    const innerWidth = iconSize + textWidth + textGap;

    return {
        ...node,
        width: innerWidth + padding.x * 2,
        height: iconSize + padding.y * 2,
        textOffset: (innerWidth - textWidth) / 2 - 1,
        iconOffset: -innerWidth / 2,
        iconSize,
        icon   
    }

}




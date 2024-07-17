const generateAnimation = (translateX, translateY, axisStart, axisEnd) => ({
    initial: { opacity: 0, transform: `translate(${translateX}, ${translateY})` },
    animate: { opacity: 1, transform: `translate(${axisStart}, ${axisEnd})` },
});

export const tooltipAnimation = {
    top: generateAnimation("-50%", "20%", "-50%", "0%"),
    topStart: generateAnimation("0%", "20%", "0%", "0%"),
    topEnd: generateAnimation("0%", "20%", "0%", "0%"),
    right: generateAnimation("-10%", "-50%", "0%", "-50%"),
    rightStart: generateAnimation("-10%", "0%", "0%", "0%"),
    rightEnd: generateAnimation("-10%", "0%", "0%", "0%"),
    bottom: generateAnimation("-50%", "-20%", "-50%", "0%"),
    bottomStart: generateAnimation("0%", "-20%", "0%", "0%"),
    bottomEnd: generateAnimation("0%", "-20%", "0%", "0%"),
    left: generateAnimation("10%", "-50%", "0%", "-50%"),
    leftStart: generateAnimation("10%", "0%", "0%", "0%"),
    leftEnd: generateAnimation("10%", "0%", "0%", "0%"),
};
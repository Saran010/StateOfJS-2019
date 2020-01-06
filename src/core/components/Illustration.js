import React, { Component } from 'react'

export const getDimensions = (props = {}) => {
    const { ratio = 'square' } = props
    const d = {}

    const heights = {
        square: 2000,
        landscape: 1000,
        logo: 500
    }

    d.animationDuration = 7000

    d.blue = '#3c52d1'
    d.grey = '#A2C7CE'
    d.pink = '#ec2f95'
    d.crossHatchStroke = d.pink
    // blue = 'red'
    // grey = 'blue'
    // darkBlue = 'green'

    d.dashArray = '16.45 6.17'

    d.gridStrokeWidth = 2
    d.strokeWidth = 7
    d.letterStrokeWidth = 16
    d.crossHatchStrokeWidth = 6

    d.totalWidth = 2000
    d.totalHeight = heights[ratio]
    d.centerX = d.totalWidth / 2
    d.centerY = d.totalHeight / 2
    d.minDimension = Math.min(d.totalWidth, d.totalHeight) // eslint-disable-line no-unused-vars

    // parameters
    d.baseUnit = 100
    d.frameWidth = 6 * d.baseUnit

    // circles
    d.letterOffset = 5 * d.baseUnit
    d.radiusSteps = [1.2, 2, 3]
    d.totalFrameWidth = d.frameWidth * 3 - (d.frameWidth - d.letterOffset) * 2
    d.totalFrameHeight = 6 * d.baseUnit
    d.topLeftX = d.centerX - d.totalFrameWidth / 2
    d.topLeftY = d.centerY - d.totalFrameHeight / 2
    d.bottomRightX = d.centerX + d.totalFrameWidth / 2
    d.bottomRightY = d.centerY + d.totalFrameHeight / 2
    d.cxCenter = d.totalWidth / 2 - d.letterOffset
    d.cyCenter = d.totalHeight / 2
    d.cxTopLeft = d.cxCenter - d.frameWidth / 2
    d.cyTopLeft = d.cyCenter - d.frameWidth / 2

    d.saxCenter = d.totalWidth / 2
    d.sayCenter = d.cyCenter
    d.saxTopLeft = d.saxCenter - d.frameWidth / 2 // eslint-disable-line no-unused-vars
    d.sayTopLeft = d.cyTopLeft // eslint-disable-line no-unused-vars

    d.sbxCenter = d.totalWidth / 2 + d.letterOffset
    d.sbyCenter = d.cyCenter
    d.sbxTopLeft = d.sbxCenter - d.frameWidth / 2 // eslint-disable-line no-unused-vars
    d.sbyTopLeft = d.cyTopLeft // eslint-disable-line no-unused-vars

    // vertical gridlines
    d.vGridLineCount = 99
    d.vLineSpacing = d.baseUnit
    d.vLineOffset = ((d.vGridLineCount - 1) / 2) * d.vLineSpacing
    d.vLineStart = d.centerX - d.vLineOffset

    // horizontal gridlines
    d.hGridLineCount = 99
    d.hLineSpacing = d.baseUnit
    d.hLineOffset = ((d.hGridLineCount - 1) / 2) * d.hLineSpacing
    d.hLineStart = d.centerY - d.hLineOffset

    // horizontal lines
    d.hLineCount = 3
    d.hLineGap = d.frameWidth / (d.hLineCount - 1)
    d.hLineOverflow = d.baseUnit / 2

    // vertical lines
    d.vLineCount = 9
    d.vLineGap = d.totalFrameWidth / (d.vLineCount - 1)
    d.vLineOverflow = d.hLineOverflow

    // diagonal lines
    d.dLineCount = 3
    d.dLine1x = d.cxCenter - 3 * d.baseUnit
    d.dLine1y = d.cyCenter - 3 * d.baseUnit
    d.dLineOverflow = d.hLineOverflow * 0.8

    // crosshatching
    d.crossHatchCount = 100
    d.crossHatchGap = Math.round(d.frameWidth / d.crossHatchCount) * 2

    return d
}

// note: x, y are the coordinates of the center of the letter
// we subtract frameWidth/2 to get the top left point
const LetterS = ({ x, y, d, ...rest }) => (
    <path
        {...rest}
        transform={`translate(${x - d.frameWidth / 2},${y - d.frameWidth / 2})`}
        d="M160.53 437.745L213.598 383.729C222.664 394.962 238.248 407.886 250.732 415.244L250.772 415.268L250.812 415.29C264.808 422.982 278.774 426.897 292.675 426.897C298.938 426.897 305.048 426.155 310.999 424.667C317.045 423.155 322.342 420.677 326.829 417.192C331.695 413.66 335.485 408.975 338.214 403.218C340.988 397.365 342.311 390.476 342.311 382.654C342.311 375.063 340.621 368.403 337.081 362.827C333.648 357.418 328.738 352.685 322.47 348.588C316.49 344.117 308.964 340.275 299.969 337.016C291.374 333.435 281.53 329.685 270.44 325.763C259.806 321.89 249.323 317.313 238.993 312.03C229.159 306.841 220.244 300.272 212.241 292.314C204.614 284.063 198.326 274.241 193.397 262.813C188.836 251.158 186.503 236.966 186.503 220.154C186.503 199.494 190.237 182.001 197.569 167.562C204.979 152.969 214.673 141.038 226.641 131.715C238.663 122.349 252.23 115.58 267.368 111.408L267.399 111.4L267.431 111.39C282.668 106.841 298.047 104.57 313.576 104.57C332.144 104.57 351.074 108.399 370.386 116.11L370.394 116.113L370.401 116.116C380.105 119.93 392.8 126.914 404.964 134.893C415.983 142.122 426.386 150.05 433.614 157.003L381.723 208.894C377.8 204.347 372.184 199.731 366.397 195.621C359.335 190.605 351.716 186.132 345.882 183.21C334.456 176.973 323.2 173.772 312.151 173.772C306.563 173.772 300.83 174.327 294.957 175.429L294.94 175.432L294.924 175.435C289.134 176.585 283.837 178.885 279.06 182.326C274.238 185.443 270.156 189.687 266.795 194.981L266.783 195L266.772 195.018C263.531 200.287 262.039 206.961 262.039 214.808C262.039 221.56 263.204 227.428 265.711 232.264L265.751 232.341L265.795 232.416C268.565 237.092 272.35 241.139 277.092 244.569L277.132 244.598L277.173 244.626C282.096 247.949 287.798 251.061 294.259 253.969L294.326 253.999L294.395 254.026C300.757 256.532 307.905 259.213 315.836 262.069C327.179 266.324 339.001 271.113 351.303 276.438L351.338 276.453L351.373 276.467C363.422 281.334 374.383 287.936 384.266 296.277C394.065 304.547 402.212 314.909 408.694 327.412L408.702 327.428L408.71 327.443C415.056 339.345 418.323 354.488 418.323 373.032C418.323 394.43 414.738 412.864 407.674 428.418L407.669 428.429L407.663 428.441C400.867 443.737 391.63 456.362 379.971 466.375C368.257 476.434 354.846 483.897 339.709 488.763C324.499 493.653 308.825 496.099 292.675 496.099C269.021 496.099 246.15 491.55 224.041 482.442C202.843 473.367 175.55 454.326 160.53 437.745Z"
        stroke={d.blue}
        strokeWidth={d.letterStrokeWidth}
    />
)

const LetterC = ({ x, y, d, ...rest }) => (
    <path
        {...rest}
        transform={`translate(${x - d.frameWidth / 2},${y - d.frameWidth / 2})`}
        d="M160.188 156.224L160.199 156.213L160.21 156.202C177.72 139.039 198.262 125.898 221.869 116.778C245.472 107.658 270.963 103.084 298.368 103.084C323.672 103.084 348.477 107.82 372.802 117.309L372.827 117.318L372.852 117.327C396.455 126.072 417.025 139.671 431.933 156.426L376.805 213.455C368.296 202.578 356.456 193.998 343.781 188.589C330.048 182.728 315.931 179.787 301.452 179.787C285.624 179.787 270.962 182.898 257.509 189.155C244.446 195.034 233.135 203.308 223.599 213.962C214.063 224.617 206.675 237.261 201.413 251.851C196.134 266.133 193.516 281.823 193.516 298.889C193.516 316.309 196.133 332.351 201.409 346.984C206.662 361.557 213.866 374.191 223.047 384.842L223.083 384.885L223.121 384.926C232.66 395.215 243.966 403.297 257.013 409.166C270.121 415.063 284.434 417.992 299.91 417.992C317.811 417.992 333.586 414.338 347.135 406.92C359.459 400.173 370.846 389.925 378.928 379.205L435.006 435.283C419.442 453.274 399.578 468.702 377.225 479.488C354.063 490.309 327.287 495.764 296.826 495.764C269.091 495.764 243.446 491.016 219.859 481.554C196.59 472.082 176.385 458.766 159.214 441.608C142.044 424.095 128.558 403.238 118.765 379.001C108.992 354.814 104.084 328.123 104.084 298.889C104.084 268.94 108.993 241.9 118.758 217.726C128.887 193.498 142.702 173.013 160.188 156.224Z"
        stroke={d.blue}
        strokeWidth={d.letterStrokeWidth}
    />
)

const getCrossHatchCoords = (x, y, i, d) => {
    let point1, point2
    const isEven = i % 2 === 0
    const halfCount = d.crossHatchCount / 2
    const offset1 = isEven ? 0 : 1
    const offset2 = isEven ? 1 : 0
    const randomCoefficient = 10
    const randomFactor1 = Math.round(Math.random() * randomCoefficient)
    const randomFactor2 = Math.round(Math.random() * randomCoefficient)
    if (i < halfCount) {
        // e.g. 0 to 19
        point1 = [x, y + (i - offset1) * d.crossHatchGap + randomFactor1]
        point2 = [x + (i - offset2) * d.crossHatchGap + randomFactor2, y]

        let [x1, y1] = isEven ? point1 : point2
        let [x2, y2] = isEven ? point2 : point1
        return { x1, y1, x2, y2 }
    } else {
        // e.g. 20 to 39
        point1 = [x + (i - offset1 - halfCount) * d.crossHatchGap + randomFactor1, y + d.frameWidth]
        point2 = [x + d.frameWidth, y + (i - offset2 - halfCount) * d.crossHatchGap + randomFactor2]

        let [x1, y1] = isEven ? point1 : point2
        let [x2, y2] = isEven ? point2 : point1
        return { x1, y1, x2, y2 }
    }
}

class Line extends Component {
    state = {
        visible: false
    }

    render() {
        const { visible } = this.state
        return (
            <line
                style={{ opacity: visible ? 1 : 0 }}
                onMouseOver={() => {
                    this.setState({ visible: true })
                }}
                {...this.props}
            />
        )
    }
}

const CrossHatching = ({ x, y, d, prefix, ...rest }) => (
    <g stroke={d.pink} strokeWidth={d.crossHatchStrokeWidth} {...rest}>
        {Array.from(Array(d.crossHatchCount).keys()).map(i => {
            const { x1, y1, x2, y2 } = getCrossHatchCoords(x, y, i, d)
            return (
                <Line
                    key={i}
                    className={`ch ${prefix}ch ${prefix}ch${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={d.crossHatchStroke}
                    strokeWidth={d.crossHatchStrokeWidth}
                />
            )
        })}
        {/* {Array.from(Array(crossHatchCount).keys()).map(i => (
            <line
                key={i + crossHatchCount}
                className={`${prefix}ch ${prefix}ch${i + crossHatchCount}`}
                x1={x + i * crossHatchGap}
                y1={y + frameWidth}
                x2={x + frameWidth}
                y2={y + i * crossHatchGap}
                stroke={crossHatchStroke}
                strokeWidth={crossHatchStrokeWidth}
            />
        ))} */}
    </g>
)

export const GridLines = ({ d }) => (
    <>
        {/* vertical gridlines */}
        {Array.from(Array(d.vGridLineCount).keys()).map(i => (
            <line
                key={i}
                className={`vgl`}
                x1={d.vLineStart + i * d.vLineSpacing}
                y1={-9999}
                x2={d.vLineStart + i * d.vLineSpacing}
                y2={9999}
                stroke={d.grey}
                strokeWidth={d.gridStrokeWidth}
                strokeDasharray={d.dashArray}
            />
        ))}

        {/* horizontal gridlines */}
        {Array.from(Array(d.hGridLineCount).keys()).map(i => (
            <line
                key={i}
                className={`hgl`}
                x1={-9999}
                y1={d.hLineStart + i * d.hLineSpacing}
                x2={9999}
                y2={d.hLineStart + i * d.hLineSpacing}
                stroke={d.grey}
                strokeWidth={d.gridStrokeWidth}
                strokeDasharray={d.dashArray}
            />
        ))}
    </>
)

export const GridLinesSVG = props => {
    const d = getDimensions(props)
    return (
        <svg
            className="GridLines"
            viewBox={`0 0 ${d.totalWidth} ${d.totalHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <g>
                <GridLines d={d} />
            </g>
        </svg>
    )
}

const Illustration = ({ done = false, animated = true, crosshatching = true, d }) => (
    <svg
        className={`Illustration ${animated && 'Animated'}`}
        viewBox={`0 0 ${d.totalWidth} ${d.totalHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <g>
            <GridLines d={d} />
            {/* horizontal lines */}
            {Array.from(Array(d.hLineCount).keys()).map(i => (
                <line
                    key={i}
                    className={`hl hl${i}`}
                    x1={d.cxTopLeft - d.hLineOverflow}
                    y1={d.cyTopLeft + i * d.hLineGap}
                    x2={d.cxTopLeft + d.totalFrameWidth + d.hLineOverflow}
                    y2={d.cyTopLeft + i * d.hLineGap}
                    stroke={d.grey}
                    strokeWidth={d.strokeWidth}
                />
            ))}

            {/* vertical lines */}
            {Array.from(Array(d.vLineCount).keys()).map(i => (
                <line
                    key={i}
                    className={`vl vl${i}`}
                    x1={d.cxTopLeft + i * d.vLineGap}
                    y1={d.cyTopLeft - d.vLineOverflow}
                    x2={d.cxTopLeft + i * d.vLineGap}
                    y2={d.cyTopLeft + d.frameWidth + d.vLineOverflow}
                    stroke={d.grey}
                    strokeWidth={d.strokeWidth}
                />
            ))}

            {/* circles C */}
            {d.radiusSteps.map((s, i) => (
                <circle
                    key={i}
                    className={`circle cc cc${i}`}
                    cx={d.cxCenter}
                    cy={d.cyCenter}
                    r={d.baseUnit * s}
                    stroke={d.grey}
                    strokeWidth={d.strokeWidth}
                />
            ))}

            {/* circles Sa */}
            {d.radiusSteps.map((s, i) => (
                <circle
                    key={i}
                    className={`circle cs1_ cs1_${i}`}
                    cx={d.saxCenter}
                    cy={d.sayCenter}
                    r={d.baseUnit * s}
                    stroke={d.grey}
                    strokeWidth={d.strokeWidth}
                />
            ))}
            {/* circles Sb */}
            {d.radiusSteps.map((s, i) => (
                <circle
                    key={i}
                    className={`circle cs2_ cs2_${i}`}
                    cx={d.sbxCenter}
                    cy={d.sbyCenter}
                    r={d.baseUnit * s}
                    stroke={d.grey}
                    strokeWidth={d.strokeWidth}
                />
            ))}

            {/* diagonal lines */}
            {Array.from(Array(d.dLineCount).keys()).map(i => (
                <g key={i}>
                    <line
                        className={`dl dl${2 * i}`}
                        x1={d.dLine1x + i * d.letterOffset - d.dLineOverflow}
                        y1={d.dLine1y - d.dLineOverflow}
                        x2={d.dLine1x + i * d.letterOffset + d.frameWidth + d.dLineOverflow}
                        y2={d.dLine1y + d.frameWidth + d.dLineOverflow}
                        stroke={d.grey}
                        strokeWidth={d.strokeWidth}
                    />
                    <line
                        className={`dl dl${2 * i + 1}`}
                        x1={d.dLine1x + i * d.letterOffset + d.frameWidth + d.dLineOverflow}
                        y1={d.dLine1y - d.dLineOverflow}
                        x2={d.dLine1x + i * d.letterOffset - d.dLineOverflow}
                        y2={d.dLine1y + d.frameWidth + d.dLineOverflow}
                        stroke={d.grey}
                        strokeWidth={d.strokeWidth}
                    />
                </g>
            ))}

            {crosshatching && done && (
                <>
                    {' '}
                    ({/* masks (cross-hatching) */}
                    <mask id="maskC" maskUnits="userSpaceOnUse">
                        <LetterC x={d.cxCenter} y={d.cyCenter} fill="#fff" d={d} />
                    </mask>
                    {
                        <CrossHatching
                            x={d.cxCenter - d.frameWidth / 2}
                            y={d.cyCenter - d.frameWidth / 2}
                            mask="url(#maskC)"
                            prefix="c-"
                            d={d}
                        />
                    }
                    <mask id="maskS1" maskUnits="userSpaceOnUse">
                        <LetterS x={d.saxCenter} y={d.sayCenter} fill="#fff" d={d} />
                    </mask>
                    <CrossHatching
                        x={d.saxCenter - d.frameWidth / 2}
                        y={d.sayCenter - d.frameWidth / 2}
                        mask="url(#maskS1)"
                        prefix="s1-"
                        d={d}
                    />
                    <mask id="maskS2" maskUnits="userSpaceOnUse">
                        <LetterS x={d.sbxCenter} y={d.sbyCenter} fill="#fff" d={d} />
                    </mask>
                    <CrossHatching
                        x={d.sbxCenter - d.frameWidth / 2}
                        y={d.sbyCenter - d.frameWidth / 2}
                        mask="url(#maskS2)"
                        prefix="s2-"
                        d={d}
                    />
                    )
                </>
            )}

            {/* letters */}
            <LetterC className="letter letter0 lc" x={d.cxCenter} y={d.cyCenter} d={d} />
            <LetterS className="letter letter1 ls1" x={d.saxCenter} y={d.sayCenter} d={d} />
            <LetterS className="letter letter2 ls2" x={d.sbxCenter} y={d.sbyCenter} d={d} />

            {/* the state of */}
            <text
                x={d.topLeftX - 30}
                y={d.topLeftY - 100}
                className="logo-text theStateOf theStateOf1"
            >
                The State Of
            </text>
            {/* <path
                transform={`translate(-${totalWidth},${totalHeight/100})`}
                className="theStateOf theStateOf1"
                d="M1695.56 1479.48C1691.28 1479.48 1689.14 1477.34 1689.14 1473.07C1689.14 1471.91 1689.27 1470.35 1689.51 1468.38L1697.78 1420.27H1676.93L1677.92 1414.35H1694.08C1695.8 1414.35 1697.12 1413.98 1698.02 1413.24C1698.93 1412.5 1699.54 1411.22 1699.87 1409.41L1702.83 1391.9H1709.37L1705.67 1414.35H1734.41L1733.43 1420.27H1704.68L1695.93 1472.2L1697.65 1473.19L1728.12 1453.82L1731.58 1458.26L1710.73 1471.96C1706.78 1474.67 1703.7 1476.6 1701.48 1477.75C1699.34 1478.9 1697.37 1479.48 1695.56 1479.48ZM1765.2 1386.72H1772.11L1764.96 1429.03H1765.45C1767.84 1424.01 1770.71 1420.06 1774.09 1417.19C1777.54 1414.31 1781.9 1412.87 1787.16 1412.87C1792.59 1412.87 1796.78 1414.47 1799.74 1417.68C1802.79 1420.8 1804.31 1425.2 1804.31 1430.88C1804.31 1432.03 1804.23 1433.3 1804.06 1434.7C1803.98 1436.02 1803.81 1437.33 1803.57 1438.65L1797.03 1478H1790.12L1796.54 1439.39C1796.78 1437.99 1796.95 1436.68 1797.03 1435.44C1797.11 1434.21 1797.15 1433.14 1797.15 1432.24C1797.15 1427.96 1796.12 1424.71 1794.07 1422.49C1792.1 1420.19 1789.09 1419.04 1785.06 1419.04C1779.39 1419.04 1774.5 1421.46 1770.38 1426.31C1769.15 1427.79 1767.75 1429.81 1766.19 1432.36C1764.63 1434.83 1763.52 1437.87 1762.86 1441.49L1756.82 1478H1749.91L1765.2 1386.72ZM1849.16 1479.48C1841.27 1479.48 1835.22 1477.22 1831.03 1472.7C1826.83 1468.09 1824.74 1461.22 1824.74 1452.1C1824.74 1446.5 1825.56 1441.32 1827.2 1436.55C1828.85 1431.78 1831.15 1427.63 1834.11 1424.09C1837.15 1420.56 1840.73 1417.8 1844.84 1415.83C1849.04 1413.86 1853.64 1412.87 1858.66 1412.87C1864.91 1412.87 1869.93 1414.31 1873.71 1417.19C1877.57 1419.98 1879.51 1424.01 1879.51 1429.28C1879.51 1431.41 1878.97 1433.67 1877.9 1436.06C1876.92 1438.44 1874.78 1440.66 1871.49 1442.72C1868.2 1444.78 1863.39 1446.54 1857.06 1448.02C1850.81 1449.51 1842.46 1450.37 1832.01 1450.62C1831.93 1451.27 1831.89 1451.89 1831.89 1452.47C1831.89 1453.04 1831.89 1453.41 1831.89 1453.58C1831.89 1456.29 1832.14 1458.84 1832.63 1461.22C1833.21 1463.61 1834.15 1465.75 1835.47 1467.64C1836.87 1469.45 1838.72 1470.89 1841.02 1471.96C1843.32 1473.02 1846.24 1473.56 1849.78 1473.56C1854.71 1473.56 1858.91 1472.28 1862.36 1469.74C1865.81 1467.19 1869.14 1463.28 1872.35 1458.02L1877.41 1461.1C1873.87 1467.27 1869.88 1471.87 1865.44 1474.92C1861 1477.96 1855.57 1479.48 1849.16 1479.48ZM1857.92 1418.67C1851.42 1418.67 1845.91 1420.8 1841.39 1425.08C1836.87 1429.28 1834.03 1435.36 1832.88 1443.34L1832.51 1445.56C1841.06 1445.31 1847.93 1444.69 1853.11 1443.71C1858.37 1442.72 1862.44 1441.49 1865.32 1440.01C1868.2 1438.44 1870.09 1436.76 1870.99 1434.95C1871.98 1433.14 1872.47 1431.33 1872.47 1429.52C1872.47 1426.48 1871.36 1423.93 1869.14 1421.87C1866.92 1419.74 1863.18 1418.67 1857.92 1418.67ZM1997.09 1479.48C1984.59 1479.48 1975.5 1475.41 1969.83 1467.27L1975.01 1463.2C1977.56 1466.73 1980.64 1469.37 1984.26 1471.09C1987.88 1472.74 1992.32 1473.56 1997.58 1473.56C2003.83 1473.56 2008.77 1472.33 2012.39 1469.86C2016.09 1467.39 2017.94 1463.81 2017.94 1459.13C2017.94 1455.67 2016.87 1453.25 2014.73 1451.85C2012.59 1450.45 2009.75 1449.55 2006.22 1449.14L1996.84 1448.02C1994.46 1447.7 1992.16 1447.24 1989.94 1446.67C1987.72 1446.01 1985.74 1445.11 1984.01 1443.95C1982.37 1442.72 1981.05 1441.2 1980.07 1439.39C1979.08 1437.5 1978.59 1435.15 1978.59 1432.36C1978.59 1429.07 1979.24 1426.19 1980.56 1423.72C1981.96 1421.26 1983.85 1419.24 1986.23 1417.68C1988.62 1416.03 1991.37 1414.84 1994.5 1414.1C1997.62 1413.28 2001 1412.87 2004.61 1412.87C2010.62 1412.87 2015.55 1413.81 2019.42 1415.71C2023.28 1417.52 2026.33 1419.86 2028.55 1422.74L2023.61 1427.05C2022.95 1426.07 2022.09 1425.08 2021.02 1424.09C2019.95 1423.11 2018.59 1422.24 2016.95 1421.5C2015.39 1420.68 2013.54 1420.02 2011.4 1419.53C2009.26 1419.04 2006.75 1418.79 2003.87 1418.79C1997.95 1418.79 1993.39 1419.94 1990.18 1422.24C1986.97 1424.46 1985.37 1427.67 1985.37 1431.87C1985.37 1433.59 1985.66 1435.07 1986.23 1436.31C1986.81 1437.46 1987.63 1438.4 1988.7 1439.14C1989.77 1439.88 1991.05 1440.46 1992.53 1440.87C1994.01 1441.28 1995.61 1441.61 1997.34 1441.86L2006.59 1443.09C2008.81 1443.34 2010.99 1443.75 2013.13 1444.32C2015.35 1444.9 2017.28 1445.76 2018.92 1446.91C2020.65 1447.98 2022.05 1449.46 2023.12 1451.36C2024.19 1453.25 2024.72 1455.63 2024.72 1458.51C2024.72 1461.88 2024.02 1464.88 2022.62 1467.52C2021.31 1470.06 2019.42 1472.24 2016.95 1474.05C2014.48 1475.86 2011.56 1477.22 2008.19 1478.12C2004.82 1479.03 2001.12 1479.48 1997.09 1479.48ZM2065.38 1479.48C2061.1 1479.48 2058.97 1477.34 2058.97 1473.07C2058.97 1471.91 2059.09 1470.35 2059.34 1468.38L2067.6 1420.27H2046.75L2047.74 1414.35H2063.9C2065.63 1414.35 2066.94 1413.98 2067.85 1413.24C2068.75 1412.5 2069.37 1411.22 2069.7 1409.41L2072.66 1391.9H2079.2L2075.5 1414.35H2104.24L2103.25 1420.27H2074.51L2065.75 1472.2L2067.48 1473.19L2097.95 1453.82L2101.4 1458.26L2080.55 1471.96C2076.61 1474.67 2073.52 1476.6 2071.3 1477.75C2069.16 1478.9 2067.19 1479.48 2065.38 1479.48ZM2159.7 1478L2162.17 1463.32H2161.8C2159.33 1468.17 2156.33 1472.08 2152.79 1475.04C2149.34 1478 2144.81 1479.48 2139.22 1479.48C2132.56 1479.48 2127.46 1477.34 2123.93 1473.07C2120.47 1468.71 2118.75 1462.66 2118.75 1454.93C2118.75 1449.92 2119.32 1444.94 2120.47 1440.01C2121.71 1434.99 2123.56 1430.47 2126.02 1426.44C2128.49 1422.41 2131.57 1419.16 2135.27 1416.69C2139.06 1414.14 2143.54 1412.87 2148.72 1412.87C2153.82 1412.87 2157.97 1413.98 2161.18 1416.2C2164.47 1418.42 2166.77 1421.5 2168.09 1425.45H2168.46L2170.31 1414.35H2177.22L2166.61 1478H2159.7ZM2141.2 1473.31C2143.83 1473.31 2146.38 1472.82 2148.84 1471.83C2151.31 1470.85 2153.61 1469.28 2155.75 1467.15C2157.64 1465.17 2159.37 1462.83 2160.93 1460.11C2162.58 1457.32 2163.69 1454.19 2164.26 1450.74L2166.98 1434.83C2167.31 1432.69 2167.18 1430.67 2166.61 1428.78C2166.11 1426.81 2165.17 1425.12 2163.77 1423.72C2162.37 1422.24 2160.52 1421.09 2158.22 1420.27C2156 1419.45 2153.41 1419.04 2150.45 1419.04C2147.24 1419.04 2144.32 1419.61 2141.69 1420.76C2139.14 1421.91 2136.88 1423.52 2134.9 1425.57C2133.01 1427.55 2131.45 1429.93 2130.22 1432.73C2128.98 1435.53 2128.08 1438.57 2127.5 1441.86L2126.15 1449.63C2125.98 1450.78 2125.86 1451.85 2125.78 1452.84C2125.69 1453.74 2125.65 1454.65 2125.65 1455.55C2125.65 1460.73 2126.89 1465.01 2129.35 1468.38C2131.9 1471.67 2135.85 1473.31 2141.2 1473.31ZM2213.31 1479.48C2209.03 1479.48 2206.9 1477.34 2206.9 1473.07C2206.9 1471.91 2207.02 1470.35 2207.27 1468.38L2215.53 1420.27H2194.68L2195.67 1414.35H2211.83C2213.56 1414.35 2214.87 1413.98 2215.78 1413.24C2216.68 1412.5 2217.3 1411.22 2217.63 1409.41L2220.59 1391.9H2227.13L2223.43 1414.35H2252.17L2251.18 1420.27H2222.44L2213.68 1472.2L2215.41 1473.19L2245.88 1453.82L2249.33 1458.26L2228.48 1471.96C2224.54 1474.67 2221.45 1476.6 2219.23 1477.75C2217.09 1478.9 2215.12 1479.48 2213.31 1479.48ZM2292.95 1479.48C2285.05 1479.48 2279.01 1477.22 2274.82 1472.7C2270.62 1468.09 2268.53 1461.22 2268.53 1452.1C2268.53 1446.5 2269.35 1441.32 2270.99 1436.55C2272.64 1431.78 2274.94 1427.63 2277.9 1424.09C2280.94 1420.56 2284.52 1417.8 2288.63 1415.83C2292.83 1413.86 2297.43 1412.87 2302.45 1412.87C2308.7 1412.87 2313.71 1414.31 2317.5 1417.19C2321.36 1419.98 2323.29 1424.01 2323.29 1429.28C2323.29 1431.41 2322.76 1433.67 2321.69 1436.06C2320.7 1438.44 2318.57 1440.66 2315.28 1442.72C2311.99 1444.78 2307.18 1446.54 2300.84 1448.02C2294.59 1449.51 2286.25 1450.37 2275.8 1450.62C2275.72 1451.27 2275.68 1451.89 2275.68 1452.47C2275.68 1453.04 2275.68 1453.41 2275.68 1453.58C2275.68 1456.29 2275.93 1458.84 2276.42 1461.22C2277 1463.61 2277.94 1465.75 2279.26 1467.64C2280.65 1469.45 2282.51 1470.89 2284.81 1471.96C2287.11 1473.02 2290.03 1473.56 2293.57 1473.56C2298.5 1473.56 2302.69 1472.28 2306.15 1469.74C2309.6 1467.19 2312.93 1463.28 2316.14 1458.02L2321.2 1461.1C2317.66 1467.27 2313.67 1471.87 2309.23 1474.92C2304.79 1477.96 2299.36 1479.48 2292.95 1479.48ZM2301.71 1418.67C2295.21 1418.67 2289.7 1420.8 2285.18 1425.08C2280.65 1429.28 2277.82 1435.36 2276.67 1443.34L2276.3 1445.56C2284.85 1445.31 2291.72 1444.69 2296.9 1443.71C2302.16 1442.72 2306.23 1441.49 2309.11 1440.01C2311.99 1438.44 2313.88 1436.76 2314.78 1434.95C2315.77 1433.14 2316.26 1431.33 2316.26 1429.52C2316.26 1426.48 2315.15 1423.93 2312.93 1421.87C2310.71 1419.74 2306.97 1418.67 2301.71 1418.67ZM2439.65 1479.48C2435.7 1479.48 2432.2 1478.86 2429.16 1477.63C2426.2 1476.31 2423.73 1474.55 2421.76 1472.33C2419.79 1470.02 2418.26 1467.31 2417.19 1464.18C2416.21 1460.98 2415.71 1457.52 2415.71 1453.82C2415.71 1447.49 2416.54 1441.82 2418.18 1436.8C2419.83 1431.7 2422.09 1427.38 2424.97 1423.85C2427.84 1420.31 2431.26 1417.6 2435.2 1415.71C2439.23 1413.81 2443.59 1412.87 2448.28 1412.87C2452.23 1412.87 2455.68 1413.53 2458.64 1414.84C2461.68 1416.08 2464.19 1417.84 2466.17 1420.15C2468.14 1422.37 2469.62 1425.08 2470.61 1428.29C2471.68 1431.41 2472.21 1434.83 2472.21 1438.53C2472.21 1444.86 2471.39 1450.57 2469.74 1455.67C2468.1 1460.69 2465.84 1464.97 2462.96 1468.5C2460.08 1472.04 2456.63 1474.75 2452.6 1476.64C2448.65 1478.53 2444.33 1479.48 2439.65 1479.48ZM2440.14 1473.44C2446.64 1473.44 2451.86 1471.38 2455.8 1467.27C2459.83 1463.16 2462.42 1457.48 2463.58 1450.25L2464.69 1443.34C2464.93 1441.94 2465.1 1440.79 2465.18 1439.88C2465.26 1438.98 2465.3 1437.99 2465.3 1436.92C2465.3 1431.25 2463.82 1426.85 2460.86 1423.72C2457.9 1420.52 2453.54 1418.91 2447.79 1418.91C2441.29 1418.91 2436.03 1420.97 2432 1425.08C2428.05 1429.19 2425.5 1434.87 2424.35 1442.1L2423.24 1449.01C2422.99 1450.41 2422.83 1451.56 2422.75 1452.47C2422.66 1453.37 2422.62 1454.36 2422.62 1455.43C2422.62 1461.1 2424.1 1465.54 2427.06 1468.75C2430.02 1471.87 2434.38 1473.44 2440.14 1473.44ZM2505.96 1504.15C2505.06 1504.15 2504.19 1503.99 2503.37 1503.66C2502.55 1503.33 2501.64 1502.79 2500.66 1502.05C2499.75 1501.31 2498.68 1500.37 2497.45 1499.22C2496.3 1498.07 2494.86 1496.63 2493.13 1494.9L2478.95 1480.96L2483.63 1476.64L2505.22 1497.98L2506.83 1497.61L2519.78 1420.27H2496.59L2497.57 1414.35H2520.76L2523.6 1396.96C2524.1 1393.83 2525.25 1391.36 2527.06 1389.55C2528.95 1387.66 2531.62 1386.72 2535.07 1386.72H2558.63L2557.65 1392.64H2531.25L2527.55 1414.35H2554.19L2553.21 1420.27H2526.69L2514.23 1494.65C2513.82 1497.28 2512.99 1499.51 2511.76 1501.31C2510.53 1503.21 2508.59 1504.15 2505.96 1504.15Z"
                fill={pink}
            /> */}
            {/* 2019 */}
            <text
                x={d.bottomRightX - 310}
                y={d.bottomRightY + 200}
                className="logo-text year year1"
            >
                2019
            </text>

            {/* <path
                className="year year1"
                d="M2613.29 2177.01H2557.53L2558.77 2169.49L2594.42 2140.25C2597.38 2137.87 2599.88 2135.69 2601.94 2133.71C2604.08 2131.66 2605.81 2129.68 2607.12 2127.79C2608.52 2125.9 2609.59 2124.01 2610.33 2122.12C2611.15 2120.23 2611.77 2118.17 2612.18 2115.95C2612.43 2114.47 2612.59 2113.36 2612.67 2112.62C2612.75 2111.8 2612.8 2111.06 2612.8 2110.4C2612.8 2106.12 2611.36 2102.63 2608.48 2099.92C2605.68 2097.12 2601.57 2095.72 2596.14 2095.72C2590.55 2095.72 2586.03 2097.12 2582.57 2099.92C2579.2 2102.71 2576.45 2106.58 2574.31 2111.51L2568.02 2109.04C2570.4 2103.12 2573.9 2098.39 2578.5 2094.86C2583.19 2091.24 2589.32 2089.43 2596.88 2089.43C2600.58 2089.43 2603.87 2089.96 2606.75 2091.03C2609.71 2092.1 2612.18 2093.58 2614.15 2095.47C2616.21 2097.28 2617.73 2099.46 2618.72 2102.01C2619.79 2104.56 2620.32 2107.36 2620.32 2110.4C2620.32 2113.77 2619.87 2116.9 2618.96 2119.78C2618.06 2122.65 2616.7 2125.49 2614.89 2128.29C2613.08 2131 2610.82 2133.71 2608.11 2136.43C2605.39 2139.06 2602.27 2141.81 2598.73 2144.69L2566.66 2170.6H2614.4L2613.29 2177.01ZM2659.5 2178.49C2643.46 2178.49 2635.45 2168.83 2635.45 2149.5C2635.45 2145.39 2635.69 2141.07 2636.19 2136.55C2636.68 2131.95 2637.5 2127.42 2638.65 2122.98C2639.89 2118.46 2641.41 2114.18 2643.22 2110.15C2645.11 2106.12 2647.41 2102.59 2650.12 2099.55C2652.92 2096.42 2656.17 2093.95 2659.87 2092.14C2663.57 2090.33 2667.81 2089.43 2672.57 2089.43C2688.61 2089.43 2696.63 2099.09 2696.63 2118.42C2696.63 2122.53 2696.38 2126.89 2695.89 2131.49C2695.4 2136.02 2694.53 2140.54 2693.3 2145.06C2692.15 2149.5 2690.63 2153.74 2688.73 2157.77C2686.93 2161.8 2684.62 2165.38 2681.83 2168.5C2679.11 2171.54 2675.91 2173.97 2672.2 2175.78C2668.5 2177.59 2664.27 2178.49 2659.5 2178.49ZM2659.87 2172.08C2667.02 2172.08 2672.86 2169.28 2677.39 2163.69C2681.91 2158.1 2684.99 2150.29 2686.64 2140.25L2688.61 2128.78C2688.94 2126.64 2689.15 2124.63 2689.23 2122.74C2689.39 2120.76 2689.47 2118.95 2689.47 2117.31C2689.47 2110.32 2688.12 2105.01 2685.4 2101.4C2682.69 2097.69 2678.29 2095.84 2672.2 2095.84C2665.05 2095.84 2659.21 2098.64 2654.69 2104.23C2650.17 2109.82 2647.08 2117.64 2645.44 2127.67L2643.46 2139.14C2643.13 2141.28 2642.89 2143.34 2642.72 2145.31C2642.64 2147.2 2642.6 2148.97 2642.6 2150.61C2642.6 2157.6 2643.96 2162.95 2646.67 2166.65C2649.38 2170.27 2653.78 2172.08 2659.87 2172.08ZM2665.17 2139.51C2663.28 2139.51 2661.93 2139.18 2661.1 2138.53C2660.28 2137.79 2659.87 2136.92 2659.87 2135.93C2659.87 2135.36 2659.99 2134.45 2660.24 2133.22C2660.49 2131.74 2661.1 2130.59 2662.09 2129.77C2663.08 2128.86 2664.68 2128.41 2666.9 2128.41C2668.79 2128.41 2670.15 2128.78 2670.97 2129.52C2671.79 2130.18 2672.2 2131 2672.2 2131.99C2672.2 2132.56 2672.08 2133.47 2671.83 2134.7C2671.59 2136.18 2670.97 2137.37 2669.98 2138.28C2669 2139.1 2667.39 2139.51 2665.17 2139.51ZM2706.7 2177.01L2707.81 2170.6H2733.34L2745.8 2096.34H2745.06L2717.92 2117.43L2714.34 2112.62L2742.1 2090.91H2753.94L2740.62 2170.6H2764.67L2763.56 2177.01H2706.7ZM2843.33 2114.22C2843.33 2120.97 2842.09 2127.46 2839.62 2133.71C2837.24 2139.96 2834.07 2145.8 2830.13 2151.23C2826.18 2156.66 2821.66 2161.55 2816.56 2165.91C2811.54 2170.27 2806.4 2173.97 2801.14 2177.01H2791.15C2796.74 2173.56 2801.71 2170.15 2806.07 2166.77C2810.51 2163.4 2814.46 2159.87 2817.91 2156.16C2821.37 2152.46 2824.37 2148.56 2826.92 2144.45C2829.55 2140.25 2831.85 2135.61 2833.83 2130.51L2833.21 2130.26C2830.58 2134.54 2827.25 2137.83 2823.22 2140.13C2819.27 2142.43 2814.67 2143.58 2809.4 2143.58C2802.58 2143.58 2797.11 2141.61 2793 2137.66C2788.88 2133.71 2786.83 2128.33 2786.83 2121.5C2786.83 2117.23 2787.57 2113.16 2789.05 2109.29C2790.61 2105.34 2792.79 2101.93 2795.59 2099.05C2798.38 2096.09 2801.75 2093.75 2805.7 2092.02C2809.73 2090.29 2814.25 2089.43 2819.27 2089.43C2827.17 2089.43 2833.13 2091.69 2837.16 2096.21C2841.27 2100.66 2843.33 2106.66 2843.33 2114.22ZM2811.87 2137.54C2818.28 2137.54 2823.55 2135.77 2827.66 2132.23C2831.85 2128.62 2834.48 2123.8 2835.55 2117.8C2835.72 2116.4 2835.84 2115.29 2835.92 2114.47C2836.09 2113.57 2836.17 2112.7 2836.17 2111.88C2836.17 2106.86 2834.69 2102.92 2831.73 2100.04C2828.77 2097.08 2824.37 2095.6 2818.53 2095.6C2812.12 2095.6 2806.81 2097.41 2802.62 2101.03C2798.51 2104.56 2795.92 2109.33 2794.85 2115.33C2794.68 2116.73 2794.52 2117.88 2794.35 2118.79C2794.27 2119.61 2794.23 2120.43 2794.23 2121.26C2794.23 2126.27 2795.71 2130.26 2798.67 2133.22C2801.63 2136.1 2806.03 2137.54 2811.87 2137.54Z"
                fill={pink}
            /> */}
        </g>
        {/* <defs>
            <clipPath id="clip0">
                <rect width={totalWidth} height={totalHeight} fill="#fff" />
            </clipPath>
        </defs> */}
    </svg>
)

class IllustrationWithTimer extends Component {
    state = {
        done: false
    }

    getDimensions = () => {
        return getDimensions(this.props)
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ done: true })
        }, this.getDimensions().animationDuration)
    }

    render() {
        return <Illustration done={this.state.done} d={this.getDimensions()} {...this.props} />
    }
}
export default IllustrationWithTimer
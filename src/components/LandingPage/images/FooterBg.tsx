import { SvgIcon } from '@/icons/type'

export default function FooterBg(props: SvgIcon) {
  const { width = 1440, height = 696 } = props

  return (
    <svg width={width} height={height} viewBox="0 0 1440 696" fill="none" className="chakra-icon" {...props}>
      <path
        d="M577.659 59.0633C298.707 -72.5698 -52.3788 16.7539 -119.964 317.708C-122.88 330.696 -125.598 343.71 -128.114 356.743C-163.852 541.888 -157.648 724.622 -110.108 887.11C-62.5683 1049.6 24.684 1186.29 143.133 1283.85C261.582 1381.4 407.181 1436.49 565.721 1443.73C724.261 1450.96 890.324 1410.11 1047.7 1325.15C1205.09 1240.19 1348.41 1114.03 1463.68 958.974C1578.95 803.92 1662.24 625.273 1705.42 440.467C1772.71 152.423 1473.84 -30.3533 1188.68 48.2598L1013.32 96.6027C868.282 136.586 713.718 123.268 577.659 59.0633Z"
        fill="black"
      />
    </svg>
  )
}
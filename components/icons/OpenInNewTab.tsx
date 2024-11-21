import { IconProps } from "@/constants/icons";

const OpenInNewTab = ({ width = 24, height = 24 }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 -960 960 960">
    <path d="M212.31-140Q182-140 161-161t-21-51.31v-535.38Q140-778 161-799t51.31-21h252.3v60h-252.3q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-252.3h60v252.3Q820-182 799-161t-51.31 21zm176.46-206.62-42.15-42.15L717.85-760H560v-60h260v260h-60v-157.85z"></path>
  </svg>
);

export default OpenInNewTab;

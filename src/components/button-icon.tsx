import { cva } from "class-variance-authority";
import Icon from "./icon";

export const buttonIconVariants = cva(`
    inline-flex items-center justify-center cursor-pointer transition group
`, {
    variants: {
        variant: {
            primary: "bg-green-base hover:bg-green-dark",
            secondary: "bg-pink-base hover:bg-pink-dark",
            tertiary: "bg-transparent hover:bg-gray-200"
        }
    }
}) 

interface ButtonIconProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">{
    icon: React.ComponentProps<typeof Icon>["svg"]
}

export default function ButtonIcon({
    iconVariants,
    size,
    disabled,
    className,
    icon: IconComponent,
    ...props
}) {
    return (
        <button>
            <Icon svg={} />
        </button>
    )
}
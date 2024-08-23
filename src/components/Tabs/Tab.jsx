import { forwardRef } from "react";
import { useComponentContext } from "@/context/useComponentContext";
import { tabStyles, tabIndicatorStyles } from "@/styles/tabs";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Tab = forwardRef(
  ({ value, icon, iconPosition, className, label, ...props }, ref) => {
    const {
      value: selectedValue,
      onChange,
      id,
      indicatorPosition,
      indicatorColor,
      indicatorCustom,
      textColor,
    } = useComponentContext();
    const isSelected = value === selectedValue;

    return (
      <button
        ref={ref}
        tabIndex={isSelected ? 0 : -1}
        type="button"
        role="tab"
        value={value}
        onClick={() => onChange(value)}
        className={cn(tabStyles({ textColor, iconPosition }), className)}
        aria-selected={isSelected}
        {...props}
      >
        <span>{icon}</span>
        <span>{label}</span>
        {isSelected ? (
          <motion.span
            layoutId={`tabIndicator${id}`}
            className={cn(
              tabIndicatorStyles({ indicatorPosition, indicatorColor }),
              indicatorCustom
            )}
          />
        ) : null}
      </button>
    );
  }
);

Tab.displayName = "Tab";

Tab.propTypes = {
  value: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
};

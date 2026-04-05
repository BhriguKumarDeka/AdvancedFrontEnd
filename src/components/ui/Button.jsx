import {cva} from 'class-variance-authority';
import {motion} from 'motion/react';
import {Loader2} from 'lucide-react';
import {cn} from '../../core/utils';

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 gap-2 px-5 py-2.5",
  {
    variants: {
      variant: {
        primary: 'bg-white text-black hover:bg-zinc-200 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]',
        secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700 border border-zinc-700',
        outline: 'border border-zinc-800 bg-transparent text-zinc-100 hover:bg-zinc-900 hover:border-zinc-700',
        ghost: 'text-zinc-100 hover:text-zinc-100 hover:bg-zinc-900',
        danger: 'bg-red-950/30 text-red-500 hover:bg-red-900/50 hover:text-red-900/40 hover:text-red-400',
      },

      size: {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-8 py-3 text-base',
      },
    },
    defaultVariants:{
      variant: 'primary',
      size: 'md',
    },
  }
)

const Button = ({className, variant, size, isLoading, children, ...props}) => {
  return (
    <motion.button
    whileHover={{scale:1.01}}
    whileTap={{scale: 0.98}}
    // use cn to merge button variants with cva claases and any additional className passed as prop
    className= {cn(buttonVariants({variant, size}), className)}
    disabled={isLoading}
    {...props}
    >
      {isLoading ? (
        <>
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="opacity-0">{children}</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  )
}

export default Button;
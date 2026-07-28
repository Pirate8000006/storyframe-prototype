import { cn } from "@/lib/utils";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function TextField({ label, error, className, id, ...rest }: TextFieldProps) {
  return (
    <label className="flex flex-col gap-[6px] w-full" htmlFor={id}>
      {label && (
        <span className="text-[12px] font-medium text-secondary">{label}</span>
      )}
      <input
        id={id}
        className={cn(
          "w-full h-[44px] px-[16px] rounded-[10px] border bg-white text-[14px] text-primary placeholder:text-placeholder",
          "border-border focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15",
          error && "border-danger",
          className
        )}
        {...rest}
      />
      {error && <span className="text-[12px] text-danger">{error}</span>}
    </label>
  );
}

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export function TextArea({ label, className, id, rows = 4, ...rest }: TextAreaProps) {
  return (
    <label className="flex flex-col gap-[6px] w-full" htmlFor={id}>
      {label && (
        <span className="text-[12px] font-medium text-secondary">{label}</span>
      )}
      <textarea
        id={id}
        rows={rows}
        className={cn(
          "w-full px-[16px] py-[12px] rounded-[10px] border border-border bg-white text-[14px] text-primary placeholder:text-placeholder resize-vertical",
          "focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15",
          className
        )}
        {...rest}
      />
    </label>
  );
}

'use client';

import * as React from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Removed redundant InputProps interface
import { cn } from '@/lib/utils';

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const disabled = props.disabled || props.value === undefined;

  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        className={cn('hide-password-toggle pr-10', className)}
        ref={ref}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={() => setShowPassword((prev) => !prev)}
        disabled={disabled}
      >
        {showPassword && !disabled ? (
          <EyeIcon className="h-4 w-4" aria-hidden="true" />
        ) : (
          <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
        )}
        <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
      </Button>

      {/* hides browsers password toggles */}
      <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
    </div>
  );
});
import PropTypes from 'prop-types';

PasswordInput.displayName = 'PasswordInput';

PasswordInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { PasswordInput };

import { Button } from "@/components/ui/button"
import { Send, X, Check } from 'lucide-react';

export const EmailButton = ({type, children}: {type: string, children: React.ReactNode}) => {
  return (
    
    <Button variant="destructive"> 
    {type === 'email' && <Send size="16"/>}
    {type === 'cancel' && <X size="16"/>}
      <span className="ml-2">
        {children}
      </span>
    {type === 'success' && <Check size="16"/>}
    </Button>
  )
}
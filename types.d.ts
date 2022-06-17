interface IntroTextType {
    greetingSection: string;
    firstName: string;
    lastName: string;
    role: string;
}

interface PageLayoutTypes {
    children: ReactNode;
}

interface AboutTextType{
    intro: string;
    body: string;
    outro: string;
}

interface ProviderTypes {
    children: ReactNode;
}

type Action = 
{type: 'INITIAL_STATE'} |{type: 'ADD_CURSOR_BORDER'} | {type: 'REMOVE_CURSOR_BORDER'} | {type: 'RESET_CURSOR_COLOR'} | {type: 'LOCK_CURSOR_POSITION', payload: {x : number, y: number}};


type State = {
  cursorStyle: {
    bordered: boolean;
    color: string;
  },
  position?: {
    x: number;
    y: number;
  } | null;
};

type DispatchActionType = (action: Action) => void;
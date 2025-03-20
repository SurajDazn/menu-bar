export interface NavItem {
    name: string;
    icon: string;
}
  
export interface LeftNavProps {
    isOpen: boolean;
    toggleNav: () => void;
}
  
export interface MainContentProps {
    toggleRightInfo: () => void;
    isRightInfoOpen: boolean;
}

export interface RightInfoProps {
    isOpen: boolean;
 }
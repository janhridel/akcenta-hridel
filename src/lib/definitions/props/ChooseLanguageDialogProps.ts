import { AvailableLanguage } from '../types/AvailableLanguage';

export interface ChooseLanguageDialogProps {
  open: boolean;
  selectedLanguage: AvailableLanguage;
  onClose: (lng: AvailableLanguage) => void;
}

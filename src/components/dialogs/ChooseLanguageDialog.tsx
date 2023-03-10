import { Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { AvailableLanguages } from '../../lib/definitions/enums/AvailableLanguages';
import { ChooseLanguageDialogProps } from '../../lib/definitions/props/ChooseLanguageDialogProps';
import { AvailableLanguage } from '../../lib/definitions/types/AvailableLanguage';

const ChooseLanguageDialog = (props: ChooseLanguageDialogProps) => {
  const { onClose, selectedLanguage, open } = props;
  const { t } = useTranslation();

  const availableLanguagesOptions = [
    { value: AvailableLanguages.Czech, title: t(`LANGUAGES.${AvailableLanguages.Czech}`) },
    { value: AvailableLanguages.English, title: t(`LANGUAGES.${AvailableLanguages.English}`) },
  ];

  const handleClose = () => {
    onClose(selectedLanguage);
  };

  const handleListItemClick = (selectedLanguage: AvailableLanguage) => {
    onClose(selectedLanguage);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{t('DIALOGS.CHOOSE_LANGUAGE.TITLE')}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {availableLanguagesOptions.map((item) => (
          <ListItem disableGutters key={`lng-${item.value}`}>
            <ListItemButton onClick={() => handleListItemClick(item.value)}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default ChooseLanguageDialog;

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GitHubIcon from '@mui/icons-material/GitHub';
import TranslateIcon from '@mui/icons-material/Translate';
import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { LayoutProps } from '../../lib/definitions/props/LayoutProps';
import { AvailableLanguage } from '../../lib/definitions/types/AvailableLanguage';
import ChooseLanguageDialog from '../dialogs/ChooseLanguageDialog';

const menuLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const DefaultLayout = (props: LayoutProps) => {
  const { children } = props;
  const { t, i18n } = useTranslation();
  const [openLanguageDialog, setOpenLanguageDialog] = useState<boolean>(false);
  const [selectedAppLanguage, setSelectedAppLanguage] = useState<AvailableLanguage>(i18n.language as AvailableLanguage);

  const handleOpenLanguageDialog = () => {
    setOpenLanguageDialog(true);
  };

  const handleCloseLanguageDialog = (lng: AvailableLanguage) => {
    setOpenLanguageDialog(false);
    setSelectedAppLanguage(lng);
    i18n.changeLanguage(lng);
  };

  const handleOpenGithub = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'https://github.com/janhridel/akcenta-hridel';
    }
  };

  return (
    <>
      <CssBaseline />
      <Box component={'main'} sx={{ m: 0, p: 0 }}>
        <AppBar component="nav">
          <Toolbar sx={{ justifyContent: 'center', '& a': { mr: 2, '&:last-child': { mr: 0 } } }}>
            <Link to={'/'} style={menuLinkStyle}>
              <IconButton color={'inherit'} component={'span'}>
                <FavoriteBorderIcon />
              </IconButton>
            </Link>
            <Link to={'/fans'} style={menuLinkStyle}>
              <Button variant={'text'} color={'inherit'} component={'span'}>
                {t('MENU.FANS')}
              </Button>
            </Link>
            <Link to={'/order'} style={menuLinkStyle}>
              <Button variant={'text'} color={'inherit'} component={'span'}>
                {t('MENU.ORDER')}
              </Button>
            </Link>
            <Link to={'/code-samples'} style={menuLinkStyle}>
              <Button variant={'text'} color={'inherit'} component={'span'}>
                {t('MENU.CODE_FRAGMENTS')}
              </Button>
            </Link>
            <IconButton color={'inherit'} component={'span'} onClick={handleOpenLanguageDialog}>
              <TranslateIcon />
            </IconButton>
            <IconButton color={'inherit'} component={'span'} onClick={handleOpenGithub}>
              <GitHubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box sx={{ mt: '80px' }}>{children}</Box>
      </Box>

      <ChooseLanguageDialog open={openLanguageDialog} selectedLanguage={selectedAppLanguage} onClose={handleCloseLanguageDialog} />
    </>
  );
};

export default DefaultLayout;

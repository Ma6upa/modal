import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Modal,
  Typography,
} from '@mui/material';

function App() {
  const theme = createTheme();
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                setOpenModal(true)
              }}
            >
              Выполнить действие
            </Button>
          </Box>
        </Container>
      </ThemeProvider>

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container component="main" maxWidth="sm">
          <Box styles={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                marginTop: '30%',
                borderRadius: 5,
              }}
            >
              <Typography variant="h6">
                Согласие с правилами
              </Typography>
              <Box sx={{
                width: '90%'
              }}>
                <Button
                  variant="contained"
                  sx={{ mt: 3, mb: 2, float: 'right' }}
                  onClick={() => {
                    setOpenModal(false)
                  }}
                >
                  Сохранить
                </Button>
                <Button
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, float: 'right', mr: 2 }}
                  onClick={() => {
                    setOpenModal(false)
                  }}
                >
                  Отменить
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Modal>
    </>
  );
}

export default App;

import { Box, Button, Input, LogoIcon, UserIcon } from "src/shared/ui";
import styles from "./header.module.scss";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "src/shared/const";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.header} gap={6}>
      <LogoIcon />
      <Input
        placeholder="Введите текст для поиска"
        className={styles.header_input}
      />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Button variant="text" onClick={() => console.log("Исполнитель")}>
          Исполнитель
        </Button>
        <Button variant="filled" onClick={() => console.log("Заказчик")}>
          Заказчик
        </Button>
      </Box>
      <Button
        variant="filled"
        className={styles.auth}
        onClick={() => {
          navigate(RoutePath.auth);
        }}
      >
        <UserIcon />
      </Button>
    </Box>
  );
};

export default Header;

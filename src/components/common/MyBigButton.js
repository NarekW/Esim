import Button from "@mui/material/Button";

export const MyBigButton = ({ color, text }) => (
  <Button
    style={{
      color,
      borderColor: color,
      padding: "5px",
      fontSize: "16px",
      borderRadius: "2px",
      width: "126px",
      fontFamily: "Hammersmith One, serif",
      marginTop: "54px",
      textTransform: "uppercase",
      fontWeight: 400,
    }}
    variant="outlined"
  >
    {text}
  </Button>
);

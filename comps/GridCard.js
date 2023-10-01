import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const GridCard = ({ employee, updateEmployee, deleteEmp }) => {
  return (
    <Card key={employee?._id} sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={employee?.photo}
        title="user image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {employee?.firstName + " " + employee?.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {employee?.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {employee?.phoneNumber}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {employee?.gender === "M" ? "Male" : "Female"}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link href={"/employee/edit/" + employee?._id}>
          <IconButton onClick={() => updateEmployee(employee)}>
            <EditIcon color="primary" />
          </IconButton>
        </Link>

        <IconButton onClick={() => deleteEmp(employee?._id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default GridCard;

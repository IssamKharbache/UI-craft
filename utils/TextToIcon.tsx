import CategoryIcon from "@mui/icons-material/Category";
import RectangleIcon from "@mui/icons-material/Rectangle"
export const  TextToIcon = ({text,size}:{text:string,size?:"small"|"medium"|"large"}) => {

switch (text) {
    case "RectangleIcon":
        return <CategoryIcon fontSize={size} className="text-primary"/>;

    case "RectangleIcon":
        return <RectangleIcon fontSize={size} className="text-primary"/>;
    default:
        return <CategoryIcon fontSize={size} className="text-primary"/>;
}
}
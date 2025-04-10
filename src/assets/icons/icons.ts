import checkSvg from "@/assets/icons/check.svg?raw";
import deleteSvg from "@/assets/icons/delete.svg?raw";
import editSvg from "@/assets/icons/edit.svg?raw";
import plusSvg from "@/assets/icons/plus.svg?raw";

type IconTypes = "check" | "delete" | "edit" | "plus";

const icons = {
  check: checkSvg,
  delete: deleteSvg,
  edit: editSvg,
  plus: plusSvg,
};

export { type IconTypes, icons };

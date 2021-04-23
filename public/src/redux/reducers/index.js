import { combineReducers } from "redux";
import { materialsReducer } from "./materialsReducer";
import { companyReducer } from "./companyReducer";
import { categoriesReducer } from "./categoriesReducer";
import { barcodeReducer } from './barcodeReducer';
import { receptionPointsReducer } from './receptionPointsReducer';
import { currentPositionReducer } from './currentPositionReducer';

export const rootReducer = combineReducers({
  company: companyReducer,
  categories: categoriesReducer,
  materials: materialsReducer,
  barcode: barcodeReducer,
  receptionPoints: receptionPointsReducer,
  currentPosition: currentPositionReducer,
});

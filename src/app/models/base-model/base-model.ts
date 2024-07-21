import { ErrorCodeEnum } from "../../core/enums/enum";

export class BaseModel<TModel>{
    data?: TModel;
    status?: boolean;  
    errorCode?: ErrorCodeEnum; 
    message?: string 
}

export class BaseListModelGeneric<TModel>{
    data?: BaseListModel<TModel>;
    status?: boolean;  
    errorCode?: ErrorCodeEnum; 
    message?: string 
}

export class BaseListModel<TModel>{
    pageIndex?: number; 
    pageSize?: number; 
    totalRecord?: number;
    data?: TModel[]
}
import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "./BaseCanvasReciverService";
import ICanvasDataAPIReciverService from "../../domain/interfaces/IAPIReciverServices/ICanvasDataAPIReciverService";

export default class CanvasDataAPIReciverService extends BaseCanvasAPIReciverService implements ICanvasDataAPIReciverService {
    
    constructor(token: string) {
        super(token);
    }
}
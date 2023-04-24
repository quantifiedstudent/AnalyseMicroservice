import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "./BaseCanvasReciverService";
import IWeatherDataAPIReciverService from "../../domain/interfaces/IAPIReciverServices/IWeatherDataAPIReciverService";

export default class WeatherDataAPIReciverService extends BaseCanvasAPIReciverService implements IWeatherDataAPIReciverService {
    
    constructor(token: string) {
        super(token);
    }
}
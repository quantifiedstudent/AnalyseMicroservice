import ICanvasDataAPIReciverService from "../../domain/interfaces/IAPIReciverServices/ICanvasDataAPIReciverService";
import ICanvasDataHandler from "../../domain/interfaces/IDomainEventHandlers/ICanvasDataHandler";

export class CanvasDataHandler implements ICanvasDataHandler {
  canvasDataAPIReciverService: ICanvasDataAPIReciverService;

  constructor(canvasDataAPIReciverService: ICanvasDataAPIReciverService) {
    this.canvasDataAPIReciverService = canvasDataAPIReciverService;
  }
}

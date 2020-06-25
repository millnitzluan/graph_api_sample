import { Request, Response } from 'express';
import { NodesController } from '../controllers/nodes.controller';

export class Routes {
  public nodesController: NodesController = new NodesController();

  public routes(app): void {
    app.route('/').get(this.nodesController.index);

    app
      .route('/nodes')
      .get(this.nodesController.index)
      .post(this.nodesController.create);

    app
      .route('/nodes/:id')
      .get(this.nodesController.show)
      .put(this.nodesController.update)
      .delete(this.nodesController.delete);
  }
}

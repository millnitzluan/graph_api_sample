import { Request, Response } from 'express';
import { NodesController } from '../controllers/nodes.controller';
import { LinksController } from '../controllers/links.controller';
import { GraphController } from '../controllers/graph.controller';

export class Routes {
  public nodesController: NodesController = new NodesController();
  public linksController: LinksController = new LinksController();
  public graphController: GraphController = new GraphController();

  public routes(app): void {
    app.route('/').get(this.graphController.mermaid);

    app
      .route('/nodes')
      .get(this.nodesController.index)
      .post(this.nodesController.create);

    app
      .route('/nodes/:id')
      .get(this.nodesController.show)
      .put(this.nodesController.update)
      .delete(this.nodesController.delete);

    app
      .route('/links')
      .get(this.linksController.index)
      .post(this.linksController.create);

    app
      .route('/links/:id')
      .get(this.linksController.show)
      .put(this.linksController.update)
      .delete(this.linksController.destroy);
  }
}

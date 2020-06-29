import { Request, Response } from 'express';
import { Link } from '../models/link.model';
import { Node } from '../models/node.model';

// Sorry for that,  planned to refactor
export class GraphController {
  public mermaid(_req: Request, res: Response) {
    const getMermaid = new Promise<string>((resolve, reject) => {
      let graphDefinition = 'graph TD;\r\n';

      Node.findAll({})
        .then((nodes: Array<Node>) => {
          nodes.forEach((node: Node) => {
            graphDefinition += `${node.id}[${node.name}];\r\n`;
          });
        })
        .then(() => Link.findAll())
        .then((links: Array<Link>) => {
          links.forEach((link: Link) => {
            graphDefinition += `${link.fromId} --> ${link.toId};\r\n`;
          });

          resolve(graphDefinition);
        })
        .catch((err: Error) => reject(err));
    });

    getMermaid
      .then((graph: string) => res.send(graph))
      .catch((err: Error) => res.status(500).json(err));
  }
}

/**
 * Created by hoangdv on 2019-09-14
 */
import { Request, Response } from "express";
import { Controller } from "../decorators/Controller.decorator";
import { Get } from "../decorators/Get.decorator";

interface ICatDetailRequest extends Request {
  params: {
    id: string,
  };
}

@Controller('/cats')
export default class CatController {

  @Get('/')
  public index(req: Request, res: Response) {
    return res.json({
      description: 'List of cats',
      cats: [/**/],
    });
  }

  @Get('/:id')
  public details(req: ICatDetailRequest, res: Response) {
    return res.json({
      description: `You are looking at the profile of ${req.params.id} cat`,
      cat: {/**/},
    });
  }
}

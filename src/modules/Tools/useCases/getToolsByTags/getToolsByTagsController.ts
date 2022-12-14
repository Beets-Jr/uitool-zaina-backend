import { Request, Response } from 'express';

import { GetToolsByTagsUseCase } from './getToolsByTagsUseCase';

export class GetToolsByTagsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tags } = request.params;
    const tagsSearch = tags.split(',');

    const getToolsBytagsUseCase = new GetToolsByTagsUseCase();

    const tools = await getToolsBytagsUseCase.execute({
      tags: tagsSearch,
    });

    return response.json(tools);
  }
}

export type BoardDto = {
  id: string;
  name: string;
};

export type BoardResponse = {
  success?: boolean;
  message?: string;
  result?: BoardDto | BoardDto[];
};

export type CreateBoardDto = Omit<BoardDto, "id">;
export type CreateBoardRequest = CreateBoardDto;

export type ReadOneBoardRequest = Pick<BoardDto, "id">;

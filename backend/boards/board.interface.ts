export type BoardDto = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date | null;
};

export type BoardResponse = {
  success?: boolean;
  message?: string;
  result?: BoardDto | BoardDto[];
};

type BoardId = Pick<BoardDto, "id">;

export type CreateBoardDto = Omit<BoardDto, "id" | "createdAt" | "updatedAt">;
export type CreateBoardRequest = CreateBoardDto;
export type CreateManyBoardsRequest = { boards: CreateBoardDto[] };

export type ReadOneBoardRequest = BoardId;

export type UpdateBoardDto = Partial<CreateBoardDto>;
export type UpdateBoardRequest = BoardId & {
  data: UpdateBoardDto;
};

export type DeleteBoardRequest = Pick<BoardDto, "id">;

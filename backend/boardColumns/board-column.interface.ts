export type BoardColumnDto = {
  id: string;
  name: string;
  boardId: string;
  createdAt: Date;
  updatedAt: Date | null;
};

export type BoardColumnResponse = {
  success?: boolean;
  message?: string;
  result?: BoardColumnDto | BoardColumnDto[];
};

type BoardColumnId = Pick<BoardColumnDto, "id">;

export type CreateBoardColumnDto = Omit<
  BoardColumnDto,
  "id" | "createdAt" | "updatedAt"
>;
export type CreateBoardColumnRequest = CreateBoardColumnDto;
export type CreateManyBoardColumnsRequest = {
  boardColumns: CreateBoardColumnDto[];
};

export type ReadOneBoardColumnRequest = BoardColumnId;

export type UpdateBoardColumnDto = Partial<
  Omit<CreateBoardColumnDto, "boardId">
>;
export type UpdateBoardColumnRequest = BoardColumnId & {
  data: UpdateBoardColumnDto;
};

export type DeleteBoardColumnRequest = Pick<BoardColumnDto, "id">;

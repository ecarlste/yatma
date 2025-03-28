export type BoardColumnDto = {
  id: string;
  name: string;
  boardId: string;
  sortIndex: number;
  createdAt: Date;
  updatedAt: Date | null;
};

export type BoardColumnResponse = {
  success?: boolean;
  message?: string;
  result?: BoardColumnDto;
};

export type BoardColumnListResponse = {
  success?: boolean;
  message?: string;
  result: BoardColumnDto[];
};

type BoardId = Pick<BoardColumnDto, "boardId">;
type BoardColumnId = Pick<BoardColumnDto, "id">;

export type CreateBoardColumnDto = Omit<
  BoardColumnDto,
  "id" | "sortIndex" | "createdAt" | "updatedAt"
> & {
  sortIndex?: number;
};
export type CreateBoardColumnRequest = CreateBoardColumnDto;
export type CreateManyBoardColumnsRequest = {
  boardColumns: CreateBoardColumnDto[];
};

export type ReadBoardColumnsRequest = Partial<BoardId>;
export type ReadOneBoardColumnRequest = BoardColumnId;

export type UpdateBoardColumnDto = Partial<
  Omit<CreateBoardColumnDto, "boardId">
>;
export type UpdateBoardColumnRequest = BoardColumnId & {
  data: UpdateBoardColumnDto;
};

export type DeleteBoardColumnRequest = Pick<BoardColumnDto, "id">;

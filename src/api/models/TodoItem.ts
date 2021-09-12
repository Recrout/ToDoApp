export interface TodoItem {
    id?: string;
    name: string;
    text_todo: string;
    priority?: number;
    completed?: boolean;
}
namespace TestRail {
  interface Group {
    id: integer;
    role: string;
    role_id: integer;
  }

  interface Project {
    announcement: string;
    completed_on: number;
    default_role: string;
    default_role_id: number;
    groups: Group[];
    id: number;
    is_completed: boolean;
    name: string;
    show_announcement: boolean;
    suite_mode: number;
    url: string;
  }
}

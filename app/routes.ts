import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("batches", "routes/batches-pro.tsx"),
  route("interview-prep", "routes/interview-prep-pro.tsx"),
  route("mock-tests", "routes/mock-tests-pro.tsx"),
  route("my-progress", "routes/my-progress-pro.tsx"),
  route("pyq", "routes/pyq-pro.tsx"),
  route("study-notes", "routes/study-notes-pro.tsx"),
  route("welcome", "routes/welcome-pro.tsx"),
] satisfies RouteConfig;

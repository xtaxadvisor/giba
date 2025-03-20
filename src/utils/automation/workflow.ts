import type { Workflow } from '../../types/automation.js';

export function validateWorkflow(workflow: Workflow): string[] {
  const errors: string[] = [];
  
  if (!workflow.name) {
    errors.push('Workflow name is required');
  }
  
  if (!workflow.trigger) {
    errors.push('Workflow trigger is required');
  }
  
  if (!workflow.steps.length) {
    errors.push('Workflow must have at least one step');
  }
  
  // Validate step connections
  const stepIds = new Set(workflow.steps.map((step: { id: string }) => step.id));
  workflow.steps.forEach((step: { id: string; nextSteps: string[] }) => {
    step.nextSteps.forEach((nextStepId: string) => {
      if (!stepIds.has(nextStepId)) {
      errors.push(`Invalid step connection: ${nextStepId} does not exist`);
      }
    });
  });
  
  return errors;
}

export function findCycles(workflow: Workflow): string[][] {
  const cycles: string[][] = [];
  const visited = new Set<string>();
  const path: string[] = [];
  
  function dfs(stepId: string) {
    if (path.includes(stepId)) {
      const cycle = path.slice(path.indexOf(stepId));
      cycles.push(cycle);
      return;
    }
    
    if (visited.has(stepId)) return;
    
    visited.add(stepId);
    path.push(stepId);
    
    const step = workflow.steps.find((s: { id: string; nextSteps: string[] }) => s.id === stepId);
    step?.nextSteps.forEach((nextId: string) => dfs(nextId));
    
    path.pop();
  }
  
  workflow.steps.forEach(step => dfs(step.id));
  return cycles;
}
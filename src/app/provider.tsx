'use client';

import { KumaRegistry } from '@kuma-ui/next-plugin/registry';
import type { FC, ReactNode } from 'react';

const Provider: FC<{ children: ReactNode }> = ({ children }) => (
  <KumaRegistry>{children}</KumaRegistry>
);

export default Provider;

interface CotInterface {
  id: number
  cot: string
  createdAt: string
  updatedAt: string
  fileId: number
  File: FileInterface
}

interface CustomerInterface {
  id: number
  name: string
  identifier: string
  User: UserInterface[]
}

interface FileInterface {
  id: number
  file: string
  createdAt: string
  updatedAt: string
  Cot: CotInterface[]
  FilesOnJobs: FilesOnJobsInterface[]
}

interface FilesOnJobsInterface {
  id: number
  createdAt: string
  updatedAt: string
  jobId: number
  fileId: number
  File: FileInterface
  Job: JobInterface
}

interface JobInterface {
  id: number
  name: string
  observations: string
  jobDmvId: string
  createdAt: string
  updatedAt: string
  userId: number
  FilesOnJobs: FilesOnJobsInterface[]
  User: UserInterface
}

interface TranslationInterface {
  id: number
  file: string
  createdAt: string
  updatedAt: string
  TranslationFile: TranslationFileInterface[]
}

interface TranslationFileInterface {
  id: number
  status: number
  createdAt: string
  updatedAt: string
  translationId: number
  Translation: TranslationInterface
}

interface UserInterface {
  id: number
  email: string
  passwordHash: string
  level: number
  isActivated: boolean
  createdAt: string
  updatedAt: string
  customerId: number
  Job: JobInterface[]
  Customer: CustomerInterface
}

export type {
  CotInterface,
  CustomerInterface,
  FileInterface,
  FilesOnJobsInterface,
  JobInterface,
  TranslationInterface,
  TranslationFileInterface,
  UserInterface,
}

import { ApiProperty } from '@nestjs/swagger'

export class HealthResponse {
	@ApiProperty({
		example: 'ok'
	})
	public status: string
	@ApiProperty({
		example: '2026-01-27T17:16:33.413Z'
	})
	public timestamp: string
}

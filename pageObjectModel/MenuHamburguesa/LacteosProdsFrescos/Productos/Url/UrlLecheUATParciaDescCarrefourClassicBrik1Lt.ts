import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../../../config/configLoader'

export class UrlLecheUATParciaDescCarrefourClassicBrik1Lt extends BasePage {

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

    }

    async MainPageLecheUATParciaDescCarrefourClassicBrik1Lt(): Promise<void> {
        await this.goto('https://www.carrefour.com.ar/leche-la-serenisima-liviana-1-1l-720720/p')
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }
    async navigateToUrlLecheUATParciaDescCarrefourClassicBrik1Lt(): Promise<void> {
        await this.MainPageLecheUATParciaDescCarrefourClassicBrik1Lt()
    }
}

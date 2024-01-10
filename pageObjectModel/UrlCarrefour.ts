import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from './commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../config/configLoader'

export class UrlCarrefour extends BasePage {

    // readonly URL_CARREFOUR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

    }

    async UrlCarrefour(): Promise<void> {
        // await this.page.goto('https://www.carrefour.com.ar/')
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToUrlCarrefour(): Promise<void> {
        await this.UrlCarrefour()
    }
}

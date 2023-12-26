import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebePaniales extends BasePage {

    readonly PANIALES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PANIALES = this.page.locator('')
    }

    async clickMundoBebePaniales(): Promise<void> {
        await this.click(this.PANIALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebePaniales(): Promise<void> {
        await this.clickMundoBebePaniales()
    }
}

import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class TiendaRetiroDrive extends BasePage {
    readonly RETIRO_O_DRIVE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.RETIRO_O_DRIVE = this.page.locator("//span[normalize-space()='RETIRO O DRIVE']")
    }

    async clickRetiroDrive(): Promise<void> {
        await this.click(this.RETIRO_O_DRIVE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToTiendaRetiroDrive(): Promise<void> {
        await this.clickRetiroDrive()
    }
}
